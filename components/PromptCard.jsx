"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  console.log("post.creator:", post.creator);
  return (
    <div className="prompt_card">
      <div className="flex items-start justify-between gap-5">
        <div>
          <Image
            src={post.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
