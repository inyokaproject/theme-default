====================
Inyoka default Theme
====================

Installation
============

On development systems:
-----------------------

1. Run ``git clone git@github.com:inyokaproject/theme-default.git`` next to
   the cloned Inyoka repository. (Basically, it doesn't matter were you clone
   the theme repository, but for support reasons it might be better to use the
   same base folder like for Inyoka). After cloning the file-structure should
   look like::

        $ tree -L 1
        .
        ├── inyoka
        ├── theme-default
        └── maybe another-theme

2. Switch into the repository: ``cd theme-default``
3. Activate source ``source ~/.venvs/inyoka/bin/activate``
4. Install as a development package: ``python setup.py develop``
5. Run ``npm install`` to install *Grunt*
6. Run ``./node_modules/grunt-cli/bin/grunt watch`` to build all static files
   and watch for file changes on the CSS / JS files

On Production
-------------

1. Run ``pip install -U "git+ssh://git@github.com:inyokaproject/theme-default.git@staging#egg=inyoka-theme-default"``

Deployment
----------

1. Run ``npm install`` to install *Grunt*
2. Run ``./node_modules/grunt-cli/bin/grunt`` to build all static files
3. Run ``manage.py collectstatic`` in your Django project

Let Django know about the theme
-------------------------------

Add ``'inyoka_theme_default'`` to the ``INSTALLED_APPS`` in
``inyoka/development_settings.py``::

    INSTALLED_APPS = INSTALLED_APPS + (
        'inyoka_theme_default',
    )
