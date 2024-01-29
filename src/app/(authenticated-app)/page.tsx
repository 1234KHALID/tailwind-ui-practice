import Form from './_components/form'
import TwoColumnForm from './_components/two-column-form'
export default function Page() {
  return (
    <div className="p-20">
      <h1>Form Component</h1>
      <div className='border border-gray-900/10 rounded-sm m-5 p-10'>
        <Form />
      </div>
      <h1>Two-column Form</h1>
      <div className='border border-gray-900/10 rounded-sm m-5 p-10 bg-gray-50'>
        <TwoColumnForm />
      </div>
    </div>
  )
}
