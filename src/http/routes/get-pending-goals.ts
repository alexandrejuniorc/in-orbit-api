import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../features/get-week-pending-goals'

export const getWeekPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async (request, reply) => {
    const { pendingGoals } = await getWeekPendingGoals()
    return { pendingGoals }
  })
}
