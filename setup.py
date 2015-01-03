#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import find_packages, setup


with open('README.rst') as f:
    readme = f.read()


setup(
    name='inyoka-theme-default',
    version='0.0.0',
    description='Inyoka default theme',
    long_description=readme,
    author='Inyoka Team',
    license="BSD",
    url='http://inyokaproject.org',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Framework :: Django',
        'License :: OSI Approved :: BSD License',
        "Programming Language :: Python :: 2",
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
    ],
)
