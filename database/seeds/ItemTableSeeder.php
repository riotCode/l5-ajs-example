<?php

class CommentTableSeeder extends Seeder 
{

	public function run()
	{

		DB::table('items')->delete();

		App\Item::create(array(
			'name' => 'Pocket Watch',
			'description' => 'Watch with chain, classy.'
		));

		App\Item::create(array(
			'name' => 'Fujifilm camera',
			'description' => 'Crazy good pictures ahead.'
		));

}
