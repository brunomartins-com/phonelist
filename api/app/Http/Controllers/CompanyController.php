<?php namespace App\Http\Controllers;

use App\Company;
use App\Libraries\Errors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;

class CompanyController extends Controller
{
    /**
     * The user repository instance.
     */
    protected $company;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Company $company)
    {
        $this->company  = $company;
    }

    /*
     * Get show all contacts
     *
     * @return json
     */
    public function get()
    {
        $companies = $this->company->get();

        return json_encode($companies);
    }
}