import React, { ChangeEvent, useState } from 'react'
import { Form, Input, Message } from 'semantic-ui-react'

type Props = {
  callBackFromParent:any
  error: string
}

const SearchBar = ({callBackFromParent, error}: Props) => {
  const [value, setValue] = useState("")
  const [warning, setWarning] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const sendValueToParent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() === "" || value.match(/\d+/g) !== null) {
      setWarning(true)
    } else {
      callBackFromParent(value);
      setWarning(false)
    }
  }

  const errorMessage = (
    <Message error header="There was an error" content={error} />
  )
  const warningMessage = (
    <Message warning header="Please check that you've entered a valid city" />
  )

  return (
    <div className="SearchBar">
      {error && errorMessage}
      {warning && warningMessage}
      <Form onSubmit={sendValueToParent}>
        <Input
          className="SearchBar-input"
          placeholder="Search the weather in..."
          action={{ icon: "search" }}
          onChange={handleChange}
          value={value}
          size="huge"
          type="text"
          autoFocus
        />
      </Form>
    </div>
  )

}

export default SearchBar
