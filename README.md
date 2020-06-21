# Random Numicon Generator

Basic webpage that allows the generation of a random number, then displays it alongside a Numicon representation.

## Build/deploy

The site is deployed on Heroku. All pushes to master are deployed automatically.

Because Heroku only deploys "applications", not static HTML pages, the web/index.html is included into a PHP page. This, combined with the presence of an empty composer.json, is enough to trick Heroku into deploying using a PHP buildpack. Taking this approach rather than just putting the site's HTML into index.php allows the index.html file to be used locally.