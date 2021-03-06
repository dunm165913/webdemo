'use strict'

const Service = require('egg').Service

function toInt(str) {
  if (typeof str === 'number') return str
  if (!str) return str
  return parseInt(str, 10) || 0
}

class PostService extends Service {
  // lay tat ca post cua 1 site
  async getAll(web_id) {
    const ctx = this.ctx
    const query = { limit: ctx.query.limit, offset: ctx.query.offset, order: [['id', 'DESC']] }
    return ctx.model.Post.findAll({
      query,
      where: {
        user_id: web_id,
      },
      attributes: ['id', 'title', 'create_at'],
    })
  }
  // lay chi tiet 1 post
  async findById(post_id) {
    const post = await this.ctx.model.Post.findById(post_id)
    if (!post || post.user_id != this.ctx.query.user_id) {
      return
    }
    return post
  }
}

module.exports = PostService
