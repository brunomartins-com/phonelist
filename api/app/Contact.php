<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model {

    protected $table = 'contact';

    protected $primaryKey = 'contactId';

    protected $fillable = ['name', 'phone', 'company'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company() {

        return self::belongsTo(Company::class, 'company', 'companyId');

    }

}