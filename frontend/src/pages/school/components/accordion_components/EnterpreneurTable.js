import React from 'react'

const EnterpreneurTable = () => {
  return (
    <section class="pt-2">
    <div className="bg-white rounded my-6">
        <table className="min-w-max w-[50%] table-auto">
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Fee</th>
                    <th className="py-3 px-6 text-left">₦180,000</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Date</td>
                    <td className="py-3 px-6 text-left">Subject to availability</td>
                    
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Duration</td>
                    <td className="py-3 px-6 text-left">3 Days (With hands-on practical session)</td>
                </tr>
              
            </tbody>
        </table>
    </div>
</section>

  
  )
}

export default EnterpreneurTable