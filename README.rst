========================
Inyoka Default Theme
========================

Installation
============

On development systems:
-----------------------

1. Run ``git clone git@github.com:inyokaproject/theme-default.git`` in the directory, where also the cloned inyoka-repository lies. After cloning the filstructure should look like: ::

        $ tree -L 1
        .
        ├── inyoka
        ├── theme-default
        └── maybe another-theme

2. Switch into the repository: ``cd theme-default``
3. Install as a development package: ``python setup.py develop``

Let Django know about the theme
-------------------------------

Add ``'inyoka_theme_default'`` to the ``INSTALLED_APPS`` in ``inyoka/development_settings.py``::

    INSTALLED_APPS = INSTALLED_APPS + (
        'inyoka_theme_default',
    )
