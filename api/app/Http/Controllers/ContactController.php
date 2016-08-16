<?php namespace App\Http\Controllers;

use App\Contact;
use App\Libraries\Errors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;

class ContactController extends Controller
{
    /**
     * The user repository instance.
     */
    protected $contact;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Contact $contact)
    {
        $this->contact  = $contact;
    }

    /*
     * Get show all contacts
     *
     * @return json
     */
    public function get()
    {
        $contacts = $this->contact->get();

        return json_encode($contacts);
    }

    /*
     * Add new contact
     *
     * @param Request
     *
     * @return json
     */
    public function post(Request $request)
    {
        $response = [];
        $validator = Validator::make($request->all(), [
            'name'      => 'required|string|max:100',
            'phone'     => 'required|string|unique:contact|max:14',
            'company'   => 'required|integer'
        ]);

        if ($validator->fails())
        {
            $errors = new Errors();
            return $errors->getAsJSON($validator);
        }

        try
        {
            $contact = $this->contact->create([
                'name' => $request->name,
                'phone' => $request->phone,
                'company' => $request->company
            ]);
        }
        catch (QueryException $e)
        {
            $response = ['status' => false, 'message' => 'An error occurred while creating.'];
            return json_encode($response);
        }

        $response = [
            'status'    => true,
            'message'   => 'Contact was added successfully!'
        ];

        return json_encode($response);
    }

    /*
     * Show contact by id
     *
     * @param $contactId
     *
     * @return json
     */
    public function show($contactId)
    {
        $contact = Contact::findOrFail($contactId);

        return json_encode($contact);
    }

    /*
     * Edit a contact
     *
     * @param Request
     *
     * @return json
     */
    public function put(Request $request)
    {
        $response = [];
        $validator = Validator::make($request->all(), [
            'contactId' => 'required|integer|exists:contact,contactId',
            'name'      => 'required|string|max:100',
            'phone'     => 'required|string|unique:contact|min:14|max:14',
            'company'   => 'required|integer'
        ], [
            'exists'    => 'The selected contact does not exist!'
        ]);

        if ($validator->fails())
        {
            $errors = new Errors();
            return $errors->getAsJSON($validator);
        }

        try
        {
            $this->contact->findOrFail($request->contactId)->update([
                'name' => $request->name,
                'phone' => $request->phone,
                'company' => $request->company
            ]);
        }
        catch (QueryException $e)
        {
            $response = ['status' => false, 'message' => 'An error occurred while editing.'];
            return json_encode($response);
        }

        $response = [
            'status'    => true,
            'message'   => 'Contact was edited successfully!'
        ];

        return json_encode($response);
    }

    public function delete(Request $request)
    {
        $response = [];
        $validator = Validator::make($request->all(), [
            'contactId' => 'required|integer|exists:contact,contactId',
        ], [
            'exists'    => 'The selected contact does not exist!'
        ]);

        if ($validator->fails())
        {
            $errors = new Errors();
            return $errors->getAsJSON($validator);
        }

        try
        {
            $this->contact->findOrFail($request->contactId)->delete();
        }
        catch (QueryException $e)
        {
            $response = ['status' => false, 'message' => 'An error occurred while deleting.'];
            return json_encode($response);
        }

        $response = [
            'status'    => true,
            'message'   => 'Contact was deleted successfully!'
        ];

        return json_encode($response);
    }
}