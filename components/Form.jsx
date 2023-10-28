import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} a post to share with the community. You can share a prompt or
        your response to a prompt.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            your prompt{" "}
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="write you prompt"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Tag{" "}
            <span className="font-normal">
              (#product #webdevelopment #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="gap-5 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 ">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="text-white bg-blue-500 px-5 py-1.5 text-sm rounded-full "
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
