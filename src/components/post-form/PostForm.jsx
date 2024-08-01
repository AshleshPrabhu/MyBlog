import React, { useCallback, useReducer } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'sonner'

export default function PostForm({ post }) {
    const [ignored,forceUpdate]=useReducer(x=>x+1,0)
    
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const submit = async (data) => {
        forceUpdate()
        if (post) {
            const file = await data.image[0] ?  await appwriteService.uploadFile(data.image[0]) : null;
            if (file) {
                await appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                toast.success("Post updated successfully")
                navigate(`/post/${dbPost.$id}`);
            }
            else{
                toast.error("Couldnt update post")
            }
        } else {
            if(userData){
                const file = await appwriteService.uploadFile(data.image[0]);
                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    data.userId=userData.$id
                    const dbPost = await appwriteService.createPost({ ...data});
                    if (dbPost) {
                        toast.success("Post created successfully")
                        navigate(`/post/${dbPost.$id}`);
                    }
                    else{
                        toast.error("Couldnt create post")
                    }
                }
                else{
                    toast.error("Couldnt create post")
                }
            }
            else{
                toast.error("couldnt create post please refresh the website")
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title, { shouldValidate: true }));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="md:w-2/3 px-2 w-full">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4 "
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4 "
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <div className="w-full hidden md:block"><RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} /></div>
            </div>
            <div className="w-full md:hidden">
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            <div className="md:w-1/3 px-2 w-full ">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

