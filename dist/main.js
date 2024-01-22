const addon = {
    name: "Template Addon",
    description: "Template addon for YADMB.",
    credits: "your-name",
    version: "1.0.0",
    sources: [
        "https://github.com/tairasoul/yadmb-extension-template/tree/main"
    ],
    data: {
        commands: [
            {
                name: "template-addon",
                description: "template addon",
                options: [],
                callback: async (interaction) => await interaction.createMessage({ content: "hello from template-addon!" })
            }
        ]
    }
};
export default addon;
