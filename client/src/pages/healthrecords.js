import FilePick from "../components/filepicker";
export default function MyRecords() {
  return (
    <div className="min-h-full">
      <div>
        <header className="py-6 bg-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-black">
              My Records
            </h1>
          </div>
        </header>
      </div>

      <main className="mt-10">
        {/* Add Content */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="file-preview-section">
                <h2 className="sr-only" id="file-preview-section">
                  File preview
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="min-h-full p-6">
                    {/* Your content */}
                    <span className="mt-2 block text-sm text-center font-semibold text-gray-900">
                        Add New Records File
                      </span>
                      <FilePick />
                      
                    
                  </div>
                </div>
              </section>
            </div>
            {/* Right column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="file-picker-section">
                <h2 className="sr-only" id="file-picker-section">
                  Add File
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">
                    {/* Your content */}

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, doloremque velit blanditiis distinctio error
                      iste voluptates nostrum officia facere ipsa modi nemo at
                      quod deleniti hic reiciendis alias labore nobis!
                    </p>
                    <p>
                      Laboriosam qui consequatur ducimus impedit nam! Voluptatem
                      enim voluptates vitae esse aliquam nihil dolorem tempore
                      autem corrupti explicabo? Quia aliquid esse possimus vel.
                      Dolores voluptatem commodi, dolor adipisci quasi beatae.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
