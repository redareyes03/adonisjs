import Route from '@ioc:Adonis/Core/Route';

Route.resource("posts", "PostsController").except(['edit'])

