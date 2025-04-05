<?php

use Illuminate\Database\Migrations\Migration;
use MongoDB\Laravel\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $collection) {
            $collection->index('name');
            $collection->unique('email');
            $collection->index('email_verified_at');
            $collection->index('password');
            $collection->rememberToken();
            $collection->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $collection) {
            $collection->unique('email');
            $collection->index('token');
            $collection->index('created_at');
        }); 
// still in workig...
        Schema::create('sessions', function (Blueprint $collection) {
            $collection->string('id')->primary();
            $collection->foreignId('user_id')->nullable()->index();
            $collection->string('ip_address', 45)->nullable();
            $collection->text('user_agent')->nullable();
            $collection->longText('payload');
            $collection->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
