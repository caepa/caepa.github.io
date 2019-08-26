[![Build Status](https://travis-ci.org/caepa/caepa.github.io.svg?branch=master)](https://travis-ci.org/caepa/caepa.github.io)


# caepa.github.io

Providing Colorado Leadership in Adult Education and Literacy since 1935

The Colorado Adult Education Professional Association, CAEPA, provides leadership to the field of adult education and family literacy by offering opportunities for professional development, advocacy, and resource sharing to improve the quality of life for every Coloradan.


# Site Resources

Our site is built using jekyll, a static site generator. Documentation at: http://jekyllrb.com.

Free hosting with github pages: https://pages.github.com/.

---
Built with Material Components for the web

Material Components for the web (MDC Web) helps developers execute [Material Design](https://www.material.io).

How-to update CSS `assets/css/main.css`

**WATCH FOR BREAKING CHANGES**
[CHANGELOG: material-components-web](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md)

Check for outdated packages and update
```
npm outdated
npm update --save-dev &&
npm ci
```

Update CSS packages
```
npm install normalize-scss@latest --save &&
npm install @primer/css@latest --save &&
npm install material-components-web@latest --save &&
npm ci &&
npm start
```

Reset and install dependencies as specified in ```package-lock.json``` only
```
npm ci
```

Run ```webpack.config.js``` to rebuild ```main.css```
```
npm start
```

Reset node_modules
```
rm -rf node_modules
npm install --save-dev
```


# Site Build

The aim was to build a site that is flexible, to change as our organization evolves, and easily maintained and updated. Github provides an ease of access to update files through there UI, or `git clone` repository.


## Site Structure

New structure taking full advantage of jekyll's collection_dir. Everything has been relocated there.

Best attempts have been made to minimize directories

[ ] `_includes`
[ ] `_layouts`
[ ] `_includes`
