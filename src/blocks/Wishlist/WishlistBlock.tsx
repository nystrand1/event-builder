'use client'

import RichText from '@/components/RichText'
import { Wishlist, WishlistBlock as WishlistBlockProps } from '@/payload-types'
import { motion } from 'motion/react'
import { WishlistItem } from './WishlistItem'

type WishlistItem = NonNullable<Wishlist['items']>[number]

export const WishlistBlock = (props: WishlistBlockProps) => {
  const wishlist = props.wishList

  if (!wishlist || typeof wishlist !== 'object') {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container flex flex-col space-y-8 items-center"
    >
      <h2 className="text-3xl">{props.title}</h2>
      {props.text && <RichText data={props.text} />}
      <ul className="flex items-stretch flex-col md:flex-row justify-center w-full gap-4 flex-wrap">
        {wishlist?.items?.map((item, i) => (
          <WishlistItem key={i} item={item} wishlist={wishlist} />
        ))}
      </ul>
    </motion.div>
  )
}
