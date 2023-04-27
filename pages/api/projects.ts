import type { NextApiRequest, NextApiResponse } from 'next'

const projects = require('./projects.json')

type Data = {
  name: string
}

export default function project(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(projects)
}
