<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Contact;

class ContactTableSeeder extends Seeder
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

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->contact->create([
            'name' => 'Bruno Martins',
            'phone' => '(470) 775-7553',
            'company' => 1
        ]);
        $this->contact->create([
            'name' => 'John Doe',
            'phone' => '(123) 456-7890',
            'company' => 3
        ]);
        $this->contact->create([
            'name' => 'Mary Jane',
            'phone' => '(768) 321-6236',
            'company' => 2
        ]);
        $this->contact->create([
            'name' => 'Clark Kent',
            'phone' => '(404) 201-3365',
            'company' => 4
        ]);
        $this->contact->create([
            'name' => 'Arthur Curry',
            'phone' => '(652) 335-9087',
            'company' => 5
        ]);
    }
}
