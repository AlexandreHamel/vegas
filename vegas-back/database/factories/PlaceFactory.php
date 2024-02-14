<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Place>
 */
class PlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'namePlace' => $this->faker->word(),
            'address' => $this->faker->streetAddress(),
            'latitude' => $this->faker->latitude($min = -90, $max = 90),
            'longitude' => $this->faker->longitude($min = -180, $max = 180),
            'description' => $this->faker->text(),
            'extras' => $this->faker->text(100),
            // 'picture' => $this->faker->image(null, 640, 480),
            'category_id' => $this->faker->numberBetween(1, 3),
        ];
    }
}
