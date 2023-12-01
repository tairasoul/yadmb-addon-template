import { addonTypes } from "yadmb-types"

const addon: AddonTypes.AddonInfo = {
  name: "Template Addon",
  description: "Template addon for YADMB.",
  credits: "your-name",
  version: "1.0.0",
  type: "command",
  sources: [
    "https://github.com/tairasoul/yadmb-extension-template/tree/main"
  ],
  commands: {
    name: "template-addon",
    description: "template addon",
    options: [],
    callback: (interaction) => await interaction.createMessage({content: "hello from template-addon!"})
  }
}

export default addon
