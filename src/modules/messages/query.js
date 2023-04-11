const GETMESSAGES = `
    select
        m.*
    from message as m
    where case when $1 > 0 then m.msg_id = $1 else true end
    order by m.msg_id
`;

const POSTMESSAGES =`
insert into
    message(username,phone,message)
values
($1,$2,$3) returning *
`;

const PUTMESSAGES = `
    with old_messages as (
        select
            msg_id,
            username,
            phone,
            message
        from message
        where msg_id = $1    
    ) update message as m
        set
        username = 
                case 
                    when length($2) > 1 then $2
                    else o.username
                end,
        phone = 
                case 
                    when length($3) > 1 then $3
                    else o.phone
                end,
        message = 
                case 
                    when length($4) > 1 then $4
                    else o.message
                end
    from old_messages as o   
    where m.msg_id = $1
    returning m.*                 
`;


const DELETEMESSAGES = `
delete from message
where msg_id=$1 returning *
`;

export{
    GETMESSAGES,
    POSTMESSAGES,
    PUTMESSAGES,
    DELETEMESSAGES
}