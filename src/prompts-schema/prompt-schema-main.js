import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha uma ferramenta (1 - QR CODE ou 2 - Password"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaMain;