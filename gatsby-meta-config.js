/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  //TODO: Change the values below according to your project
  title: "seollong's recipes",
  description: "All about healthy recipes",
  author: "seollong",
  siteUrl: "https://healthy-recipy.netlify.app",
  lang: "en-US",
  utterances: "",
  links: {},
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
