import type { Access } from 'payload'

export const adminOrPublished: Access = ({ req: { user } }) => {
  return (
    Boolean(user && user.role === 'admin') || {
      _status: {
        equals: 'published',
      },
    }
  )
}
