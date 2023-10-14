---
title: 'Goptcha'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
priority: 1
heroImage: '/Goptcha.png'
---

The goptcha package is a Go library that provides functionalities to generate and manipulate CAPTCHA 
(Completely Automated Public Turing test to tell Computers and Humans Apart) images. 
It allows users to create images containing random strings for the purpose of distinguishing human users from bots. 
The library includes the following key features:

* Customizable Configuration: The library allows users to modify default settings for captcha generation, such 
as the character count, image size multiplier, image width, character set, opacity, and noise modifier.

* Captcha Generation: the library creates a random string of characters and 
an accompanying grayscale image. The generated string is embedded into the image for human verification.

* Image Distortion: The generated image is distorted by applying sine wave-based modifications to 
the image columns, resulting in a distorted appearance. This serves the purpose of making the CAPTCHA more challenging for automated systems to decipher.

* Image Saving: function is provided to save the generated CAPTCHA image in the PNG format, if needed for diagnostics.

The Goptcha library aims to provide developers with a simple and effective way to generate CAPTCHA images for 
integration into their applications, helping to prevent automated systems from accessing or manipulating sensitive information.

[Repository](https://github.com/kelo221/goptcha) 