<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'nameUser' => 'admin',
            'password' => Hash::make('12341234'),
            'email' => 'admin@mail.com',
            'email_verified_at' => now(),
            'role' => '[ROLE_ADMIN]',
        ]);

        User::create([
            'nameUser' => 'user',
            'password' => Hash::make('12341234'),
            'email' => 'user@mail.com',
            'email_verified_at' => now(),
            'role' => '[ROLE_USER]',
        ]);

        User::factory(8)->create();
    }
}
