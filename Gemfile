source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages'], group: :jekyll_plugins
gem 'html-proofer'

# See: https://jekyllrb.com/docs/windows/#auto-regeneration
# gem 'wdm', '~> 0.1.1' if Gem.win_platform?
