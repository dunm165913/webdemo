'use strict'

const Service = require('egg').Service

class PosttagService extends Service {
  // Lay toan bo cap post-tag cua mot tag
  async getPostsOfaTag(tag_id) {
    return await this.ctx.model.Posttag.findAll({
      where: {
        tag_id,
      },
    })
  }
  async delete(post_id, tag_id) {
    await this.ctx.model
      .findById({
        where: {
          post_id,
          tag_id,
        },
      })
      .destroy()
  }

  async deleteFromPostId(post_id) {
    const posttags = await this.getTagsOfaPost(post_id)
    for (const posttag of posttags) posttag.destroy()
  }

  async deleteFromPostId(post_id) {
    const posttags = await this.getTagsOfaPost(post_id)
    for (const posttag of posttags) posttag.destroy()
  }

  async deleteFromTagId(tag_id) {
    const posttags = await this.ctx.model.Posttag.findAll({
      where: {
        tag_id,
      },
    })
    for (const posttag of posttags) posttag.destroy()
  }

  // Lay toan bo cap post-tag cua mot post
  async getTagsOfaPost(post_id) {
    return await this.ctx.model.Posttag.findAll({
      where: {
        post_id,
      },
    })
  }

  async createPostTag(post_id, tag_id) {
    const ctx = this.ctx
    const post = await ctx.service.post.findById(post_id)
    const tag = await ctx.service.tag.findById(tag_id)
    if (!post || !tag) {
      ctx.body = {
        message: 'Some thing wrong here!',
      }
      return false
    }
    await ctx.model.Posttag.create({
      post_id,
      tag_id,
    })
    return true
  }
}

module.exports = PosttagService
