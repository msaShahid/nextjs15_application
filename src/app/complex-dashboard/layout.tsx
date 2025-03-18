import '../../app/style/globals.css';

export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
  }) {
    
    return (
      <div className="space-y-6 mx-6"> 

        <div className="p-4 mt-5 text-center font-bold text-lime-500 text-[50px] bg-white shadow-md rounded-lg">{children}</div> 

        <div className="flex space-x-6">
        
            <div className="flex flex-col space-y-6 w-1/3">

              <div className="p-6 bg-white shadow-md rounded-lg">
                  <div>{users}</div>
              </div>
              
              <div className="p-6 bg-white shadow-md rounded-lg">
                  <div>{revenue}</div>
              </div>

            </div>

            <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
              <div>{notifications}</div>
            </div>

        </div>
        
      </div>
    ) 
  }