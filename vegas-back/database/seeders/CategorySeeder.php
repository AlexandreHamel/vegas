<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'nameCategory' => 'Hôtels-Casinos'
        ]);

        Category::create([
            'nameCategory' => 'Restaurants'
        ]);

        Category::create([
            'nameCategory' => 'Spectacles'
        ]);
    }
}
