import React,{useState,useEffect,useRef} from 'react'
import Action from './Action'

const AllComments = ({
    comment,
    handleInsertNode,
    handleDeleteNode,
    handleEditNode,
    }) => {
    const [input,setInput]=useState("")
    const [editMode, setEditMode] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [expand, setExpand] = useState(true)
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef?.current?.focus()
        console.log(comment)
    },[editMode])
    const onAddComment=()=>{
        if(editMode){
            handleEditNode(comment.id,inputRef?.current.innerText)
        }else{
            setExpand(true)
            setShowInput(false)
            handleInsertNode(comment.id,input)
            setInput("")
        }
        if(editMode) setEditMode(false)
    }

    const handleNewComment=()=>{
        setExpand(true)
        setShowInput(true)
    }
    const handleDelete=()=>{
        handleDeleteNode(comment.id)
    }

    return (
        <div>
        <div className={comment?.id===1? "flex w-full gap-1 items-baseline":"m-5 ] bg-white flex flex-col p-[5px_10px] w-full h-[80px] cursor-pointer border-l-[7px] border-[#ff6601] rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] dark:shadow-[0_4px_8px_0_rgba(250,250,250,0.7),0_6px_20px_0_rgba(250,250,250,0.69)]"}>
            {comment?.id===1?(
            <div className='w-full flex'>
                <input 
                type="text"
                className='m-[6px_0_0_0] placeholder:text-black bg-white p-[5px] flex-1 border border-lightgray w-[full] cursor-pointer rounded-[5px] '
                autoFocus
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder='Enter Comment...'
                />
                <Action
                className="text-[12px] p-1 rounded-md h-9 mb-0 flex items-center justify-center font-semibold cursor-pointer  m-1 text-white bg-[#569dff] tracking-[0.8px]"
                type="COMMENT"
                handleClick={onAddComment}
                />
            </div>
            ):(
                <>  
                    <span 
                        contentEditable={editMode} 
                        suppressContentEditableWarning={editMode}
                        style={{wordWrap:"break-word"}}
                        ref={inputRef}
                        className=' mt-[5px]'
                    >
                        {comment?.name}
                    </span>
                    <div style={{display:'flex',marginTop:'5px'}}>
                        {editMode?(
                            <>
                                <Action className="text-[12px] p-1 rounded-md w-10 text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="SAVE" handleClick={onAddComment}/>
                                <Action className="text-[12px] p-1 rounded-md w-14  text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="CANCEL" handleClick={()=>{
                                    if(inputRef.current){
                                        inputRef.current.innerText=comment.name
                                    }
                                    setEditMode(false)
                                }}/>
                            </>
                        ):(
                            <>
                                <Action className="text-[12px] p-1 rounded-md  text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="REPLY" handleClick={handleNewComment} />
                                <Action className="text-[12px] p-1 rounded-md  text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="EDIT" handleClick={()=>{
                                    inputRef?.current?.focus()
                                    setEditMode(true)
                                }}/>
                                <Action className="text-[12px] p-1 rounded-md  text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="DELETE" handleClick={handleDelete}/>
                            </>
                        )}
                    </div>
                </>
            )}
            </div>
            <div className=' pl-7' style={{display:expand?"block":"none"}}>
                {showInput&&(
                    <div className='flex w-full gap-1 items-baseline'>
                        <input
                            type="text"
                            className="m-[6px_0_0_0] placeholder:text-black p-[5px] flex items-center justify-between border border-lightgray  flex-1 cursor-pointer rounded-[5px] bg-[#e7e7e7]"
                            autoFocus
                            placeholder='Enter Your Comment'
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Action className="text-[12px] p-1 rounded-md  text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="REPLY" handleClick={onAddComment}/>
                        <Action className="text-[12px] p-1 rounded-md w-14  text-white font-semibold cursor-pointer bg-[#569dff] m-1" type="CANCEL" handleClick={()=>{
                            setShowInput(false)
                            if(!comment?.items?.length) setExpand(false)
                        }}/>
                    </div>
                )}
                {comment?.items?.map((cmnt)=>{
                    return <AllComments
                    key={cmnt?.id}
                    comment={cmnt}
                    handleDeleteNode={handleDeleteNode}
                    handleInsertNode={handleInsertNode}
                    handleEditNode={handleEditNode}
                    />
                })}
            </div>
        </div>
    )
}

export default AllComments
