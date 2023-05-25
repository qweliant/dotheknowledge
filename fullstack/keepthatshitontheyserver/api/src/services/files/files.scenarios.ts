import type { Prisma, File } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FileCreateArgs>({
  file: {
    one: {
      data: {
        name: 'String',
        size: 8736426,
        secret: 'String',
        contentType: 'String',
        updatedAt: '2023-05-25T16:54:38.517Z',
        url: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        size: 3430772,
        secret: 'String',
        contentType: 'String',
        updatedAt: '2023-05-25T16:54:38.517Z',
        url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<File, 'file'>
