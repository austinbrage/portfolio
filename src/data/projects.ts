import reactLogo from '../icons/frontend/react.svg'
import electronLogo from '../icons/frontend/electron.svg'
import expoLogo from '../icons/frontend/expo.svg'
import terraformLogo from '../icons/devops/terraform.svg'

import typescriptLogo from '../icons/backend/typescript.svg'
import expressLogo from '../icons/backend/express.svg'
import nodeLogo from '../icons/backend/node.svg'
import mysqlLogo from '../icons/backend/mysql.svg'
import zodLogo from '../icons/backend/zod.svg'

const cloudAccelerator = {
    name: 'Cloud client accelerator',
    tag: '[Free Saas]',
    link: 'https://google.com',
    paragraph1: 'Desktop app that allows users to create and manage terraform projects',
    paragraph2: 'Administrates several cloud projects on different providers, such as aws, gdp, azure, etc',
    stackIcons: [
        reactLogo,
        electronLogo,
        nodeLogo,
        typescriptLogo,
        terraformLogo
    ]
}

const brageTools = {
    name: 'Brage tools',
    tag: '[Commercialized Saas]',
    link: 'https://brage.pages.dev',
    paragraph1: 'Node package that allows users to generate api routes dynamically',
    paragraph2: 'Reads SQL queries and writes the corresponding validations, endpoints and more',
    stackIcons: [
        expressLogo,
        mysqlLogo,
        nodeLogo,
        typescriptLogo,
        zodLogo
    ]
}

const clientHub = {
    name: 'Client Hub',
    tag: '[Freelance job]',
    link: 'https://google.com',
    paragraph1: 'Mobile application that allows users to register and manage their daily clients',
    paragraph2: 'Administrates several clients saved on a database, related to deadlines, materials, etc',
    stackIcons: [
        expoLogo,
        reactLogo,
        expressLogo,
        mysqlLogo,
        nodeLogo,
        typescriptLogo
    ]
}

export const projects = [cloudAccelerator, brageTools, clientHub]  