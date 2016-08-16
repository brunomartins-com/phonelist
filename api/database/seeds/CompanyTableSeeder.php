<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Company;

class CompanyTableSeeder extends Seeder
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
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->company->create([
            'name' => 'T-Mobile'
        ]);
        $this->company->create([
            'name' => 'Verizon'
        ]);
        $this->company->create([
            'name' => 'AT&T'
        ]);
        $this->company->create([
            'name' => 'MetroPCS'
        ]);
        $this->company->create([
            'name' => 'Sprint'
        ]);
    }
}
