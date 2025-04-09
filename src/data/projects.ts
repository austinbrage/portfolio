import reactLogo from '../icons/frontend/react.svg'
import electronLogo from '../icons/frontend/electron.svg'
import terraformLogo from '../icons/devops/terraform.svg'
import typescriptLogo from '../icons/backend/typescript.svg'
import expressLogo from '../icons/backend/express.svg'
import nodeLogo from '../icons/backend/node.svg'
import mysqlLogo from '../icons/backend/mysql.svg'
import zodLogo from '../icons/backend/zod.svg'

const cloudAccelerator = {
    name: 'CloudStudio Pro',
    tag: '[Free Application]',
    link: 'https://cloudstudiopro.app',
    videoTitle: 'CloudStudio - Overview (Terraform &amp; Ansible Manager)',
    videoSource: 'https://www.youtube.com/embed/GYM_bfkdrZI',
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
    link: 'https://brage.app',
    videoTitle: 'Brage - Overview (Code generation without AI)',
    videoSource: 'https://www.youtube.com/embed/Hmnm-Mhw134',
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
    name: 'Freetcode',
    tag: '[Commercialized Saas]',
    link: '',
    videoTitle: '',
    videoSource: '',
    paragraph1: 'Node package that scaffolds random projects with errors to be fixed',
    paragraph2: 'Designed for job candidates to prove their abilities to solve real world problems',
    stackIcons: [
        reactLogo,
        expressLogo,
        mysqlLogo,
        nodeLogo,
        typescriptLogo
    ]
}

export const projects = [cloudAccelerator, brageTools, clientHub]  