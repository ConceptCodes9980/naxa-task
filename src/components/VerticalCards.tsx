const VerticalCard = ({ projects }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
      {projects?.map((item: any, index: number) => {
        return (
          <div className="bg-gray-200 hover:shadow-lg" key={index}>
            <div className="px-7 py-4">
              <h5 className="font-medium mb-4">{item?.title}</h5>
              <p className="mb-4 ">{item?.subtitle}</p>
              <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                  <span className="text-yellow-500 font-medium">Client</span>
                  <span className="font-medium">{item?.clients}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-yellow-500 font-medium">
                    Time Duration
                  </span>
                  <span className="font-medium">
                    {item?.start_date}-{item?.end_date}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={item?.photo}
                alt="photo"
                className="h-[480px]  object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalCard;
