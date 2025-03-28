import chalk from "chalk";

const promptSchemaQrCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Insira o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow.bold(
            "Escolha entre o tipo de QR CODE (1- NORMAL ou 2- TERMINAL"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaQrCode;