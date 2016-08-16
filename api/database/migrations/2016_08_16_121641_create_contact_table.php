<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact', function (Blueprint $table) {
            $table->increments('contactId');
            $table->string('name', 100);
            $table->string('phone', 14);
            $table->integer('company');
            $table->timestamps();
            $table->unique(['contactId', 'phone']);
            $table->foreign('company')->references('companyId')->on('company')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('contact')) {
            Schema::drop('contact', function (Blueprint $table) {
                $table->dropForeign('contact_company_foreign');
            });
        }
    }
}
