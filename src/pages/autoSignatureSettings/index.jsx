import React from 'react'

// import { List, Switch } from 'antd-mobile'
import { List, Switch } from 'antd-mobile-v5'

import {useImmer} from "use-immer";
const Item = List.Item

const autoSignatureSettings = (props) => {
    const [form, setForm] = useImmer({
        autoSign: 0
    })
    return (
        <div className='auto-signature-settings'>
            <List>
                <Item
                    extra={<Switch checked={form.autoSign}  onChange={(val) => {
                        if (val) {
                            setForm((draft) => {
                                draft.autoSign = 1
                            })

                        }else {
                            setForm((draft) => {
                                draft.autoSign = 0
                            })
                        }
                        console.log('form', form);
                    }}/>}
                >switch</Item>
            </List>
        </div>
    )
}

export default autoSignatureSettings
