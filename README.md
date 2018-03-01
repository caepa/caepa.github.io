[![Build Status](https://travis-ci.org/caepa/caepa.github.io.svg?branch=master)](https://travis-ci.org/caepa/caepa.github.io)
# caepa.github.io
---
Providing Colorado Leadership in Adult Education and Literacy since 1935

The Colorado Adult Education Professional Association, CAEPA, provides leadership to the field of adult education and family literacy by offering opportunities for professional development, advocacy, and resource sharing to improve the quality of life for every Coloradan.

## Site Resources
---
Our site is built using jekyll, a static site generator. Documentation at: http://jekyllrb.com.

Free hosting with github pages: https://pages.github.com/.

We use Materializecss as our css library, imported through a git submodule as a sass directory, see below. Documentation at: http://materializecss.com.

# Site Build
---
The aim was to build a site that is flexible, to change as our organization evolves, and easily maintained and updated. Github provides an ease of access to update files through there UI, or `git clone` repository.

## Site Structure
---
We take advantage of many of Jekyll's features to organize and build our site. The majority of our site is built around the `_data` directory, allowing our data to stored independently from the site and exported in.

TODO:
- [X] common layout
- [ ] Create flexible homepage
- [ ] Extend home layout with loop for home collection
- [X] Home collection
- [X] User generated resource forms
- [ ] Universal side-nav loop
- [ ] Move to collection directory in Jekyll v3.7.0
- [ ] Simplify data directory
- [ ] Consolidate rendezvous data into singular .json files
- [X] Update page-rendezvous for rendezvous data merge
- [ ] Review SEO tags
- [ ] Add service worker
- [ ] More to come...

## Data Directory
---
We use multiple google drive accounts... to each account has a set of read and write privileges amongst the board.

Our data is stored within our google drive account under  `_caepa.org`. To export data from drive, use add-on "export to json". Within the options, choose the correct format of json.

```
Admin
+   My Drive
|   +-- _caepa.org ** all data files
|   |   +-- _data
|   |   |   +-- contains past documents, sorted by year
|   |   +-- _events
|   |   |   +-- folders contain all event data, sorted by year
|   |   +-- _forms
|   |   |   +-- contains all form data, sorted by year
|   |
|   +-- _public ** all our public files
|   |   +-- forms
|   |   |   +-- contains hosted forms
|   |   +-- newsletters
|   |   |   +-- contains past PDF newsletters
|   |   +-- rendezvous
|   |   |   +-- folders contain session documents, sorted by year

```

## Materializecss
---
Install materializecss as a submodule for easy updating
source: https://codedump.io/share/dpQHLkNt6kKj/1/how-to-do-submodule-sparse-checkout-with-git

### Install materializecss with sparse checkout submodule for quick updating

```
git init

# I did not find a way to add submodule in 1 step without checking out
git clone --depth=1 --no-checkout https://github.com/Dogfalo/materialize.git assets/css/materialize
git submodule add --name materialize https://github.com/Dogfalo/materialize.git assets/css/materialize
git submodule absorbgitdirs

# note there is no "submodule.sub.sparsecheckout" key
git -C assets/css/materialize config core.sparseCheckout true

# note quoted wildcards to avoid their expansion by shell
echo "sass/components/* " >> .git/modules/materialize/info/sparse-checkout

# update all submodules
git submodule update --force --checkout
```

### Update submodule
 1. Read changelog: https://github.com/Dogfalo/materialize/releases
 2. Run command at root: `git submodule update --force --checkout`
