<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model {

    protected $table = 'company';

    protected $primaryKey = 'companyId';

    protected $fillable = ['name'];

}