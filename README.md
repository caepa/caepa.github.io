[![Build Status](https://travis-ci.org/caepa/caepa.github.io.svg?branch=master)](https://travis-ci.org/caepa/caepa.github.io)
# caepa.github.io

Providing Colorado Leadership in Adult Education and Literacy since 1935

The Colorado Adult Education Professional Association, CAEPA, provides leadership to the field of adult education and family literacy by offering opportunities for professional development, advocacy, and resource sharing to improve the quality of life for every Coloradan.

## Google drive
We use multple accounts... one internally, and the second stores site documents
`
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

`

## Materializecss
---
Install materializecss as a submodule for easy updating
source: https://codedump.io/share/dpQHLkNt6kKj/1/how-to-do-submodule-sparse-checkout-with-git

`
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
`

### Update submodule
 1. Read changelog: https://github.com/Dogfalo/materialize/releases
 2. Run command at root: `git submodule update --force --checkout`
