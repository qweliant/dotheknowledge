import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditFileById, UpdateFileInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormFile = NonNullable<EditFileById['file']>

interface FileFormProps {
  file?: EditFileById['file']
  onSave: (data: UpdateFileInput, id?: FormFile['id']) => void
  error: RWGqlError
  loading: boolean
}

const FileForm = (props: FileFormProps) => {
  const onSubmit = (data: FormFile) => {
    props.onSave(data, props?.file?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormFile> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.file?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <NumberField
          name="size"
          defaultValue={props.file?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="secret"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Secret
        </Label>

        <TextField
          name="secret"
          defaultValue={props.file?.secret}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="secret" className="rw-field-error" />

        <Label
          name="contentType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Content type
        </Label>

        <TextField
          name="contentType"
          defaultValue={props.file?.contentType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contentType" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.file?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FileForm
