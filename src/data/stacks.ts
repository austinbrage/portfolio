import reactLogo from '../icons/frontend/react.svg'
import electronLogo from '../icons/frontend/electron.svg'
import pwaLogo from '../icons/frontend/pwa.svg'
import expoLogo from '../icons/frontend/expo.svg'
import figmaLogo from '../icons/frontend/figma.svg'
import remixLogo from '../icons/frontend/remix.svg'

import nodeLogo from '../icons/backend/node.svg'
import expressLogo from '../icons/backend/express.svg'
import mysqlLogo from '../icons/backend/mysql.svg'
import typescriptLogo from '../icons/backend/typescript.svg'
import zodLogo from '../icons/backend/zod.svg'
import oauthLogo from '../icons/backend/oauth.svg'

import awsLogo from '../icons/devops/aws.svg'
import terraformLogo from '../icons/devops/terraform.svg'
import dockerLogo from '../icons/devops/docker.svg'
import nginxLogo from '../icons/devops/nginx.svg'
import ghActionsLogo from '../icons/devops/ghActions.svg'
import linuxLogo from '../icons/devops/linux.svg'

const frontendStack = [
  {
    name: 'react',
    logo: reactLogo,
  },
  {
    name: 'electron',
    logo: electronLogo,
  },
  {
    name: 'pwa',
    logo: pwaLogo,
  },
  {
    name: 'expo',
    logo: expoLogo,
  },
  {
    name: 'figma',
    logo: figmaLogo,
  },
  {
    name: 'remix',
    logo: remixLogo,
  },
]

const backendStack = [
  {
    name: 'node',
    logo: nodeLogo,
  },
  {
    name: 'express',
    logo: expressLogo,
  },
  {
    name: 'mysql',
    logo: mysqlLogo,
  },
  {
    name: 'typescript',
    logo: typescriptLogo,
  },
  {
    name: 'zod',
    logo: zodLogo,
  },
  {
    name: 'oauth',
    logo: oauthLogo,
  },
]

const devopsStack = [
  {
    name: 'aws',
    logo: awsLogo,
  },
  {
    name: 'terraform',
    logo: terraformLogo,
  },
  {
    name: 'docker',
    logo: dockerLogo,
  },
  {
    name: 'nginx',
    logo: nginxLogo,
  },
  {
    name: 'gh actions',
    logo: ghActionsLogo,
  },
  {
    name: 'linux',
    logo: linuxLogo,
  },
]

export type TechStacks = 'frontend' | 'backend' | 'devops'

export const techStacks = {
  frontend: frontendStack,
  backend: backendStack,
  devops: devopsStack,
}
