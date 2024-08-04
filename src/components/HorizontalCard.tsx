const HorizontalCard = ({ projects }: any) => {
  return (
    <>
      {projects?.map((item: any, index: number) => {
        return (
          <div
            className="bg-gray-200 hover:shadow-lg flex flex-col sm:flex-row gap-4 my-10"
            key={index}
          >
            <div className="w-full sm:w-2/6">
              <img
                src={item?.photo}
                alt="photo"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="px-7 py-4 w-full  sm:w-4/6">
              <h6 className="font-medium mb-4">{item?.title}</h6>
              <p className="mb-4 text-xs">{item?.subtitle}</p>
              <div className="flex gap-4">
                <div className="flex flex-col flex-1 text-xs">
                  <span className="text-yellow-500 font-medium">Client</span>
                  <span className="font-medium">{item?.clients}</span>
                </div>
                <div className="flex flex-col flex-1 text-xs">
                  <span className="text-yellow-500 font-medium">
                    Time Duration
                  </span>
                  <span className="font-medium">
                    {item?.start_date}-{item?.end_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HorizontalCard;
