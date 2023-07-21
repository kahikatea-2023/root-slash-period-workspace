import * as elements from 'typed-html'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
      <div class="flex flex-row items-start">
        <div class="w-1/12 m-2 text-sm">
          <ul>
            <li class="bg-[#e7e1e4] ">Home</li>
            <li>Best Versions</li>
            <li>Boxed Sets</li>
            <li>Naxos 2023 releases</li>
            <li>Classical Award Winners</li>
            <li>Marbecks Collectables</li>
            <li>On Sale</li>
            <li>Hidden Treasures</li>
            <li>Rare & Collectable</li>
            <li>Must Watch!</li>
            <li>Gift Vouchers</li>
            <li>Accessories</li>
            <li>Storage</li>
            <li class="bg-[#e7e1e4] ">Info</li>
            <li>Info / Help</li>
            <li>Newsletters</li>
            <li>About Us</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div class="w-11/12 border border-solid border-[#dcd3d7] bg-[#f7f5f6]">
          {/* ----------------------------------- ROWS OF 2 ARTISTS ------------------------------------ */}
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-2 border border-solid border-[#dcd3d7]">
              New & Upcoming Releases
            </div>
            <div class="flex flex-row">
              <div class="bg-[#e7e1e4] w-1/2 border border-solid border-[#dcd3d7] flex m-2">
                <img
                  class="w-36 h-36 border border-white border-solid m-2"
                  src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                  alt="Ryuichi Sakamoto"
                />
                <div>
                  <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                  <p class="italic mb-1 text-sm">12</p>
                  <p class="text-sm">
                    An intimate collection of twelve compositions by Ryuichi
                    Sakamoto, written and recorded in Tokyo during...
                  </p>
                  <p class="text-sm">$25.00</p>
                </div>
              </div>
              <div class="bg-[#e7e1e4] w-1/2 border border-solid border-[#dcd3d7] flex m-2">
                <img
                  class=" w-36 h-36 border border-white border-solid m-2"
                  src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                  alt="Ryuichi Sakamoto"
                />

                <div>
                  <h2 class="text-[#ef4136] font-medium">
                    African Head Charge
                  </h2>
                  <p class="italic mb-1 text-sm">A Trip To Bolgatanga</p>
                  <p class="text-sm">
                    African Head Charge, the legendary collaboration between
                    master percussionist Bonjo Iyabinghi Noah and...
                  </p>
                  <p class="text-sm">$37.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------- ROWS OF 4 ARTISTS ------------------------------------ */}
          <div class="flex flex-row">
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class="w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />
              <div class="text-sm">
                <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                <p class="italic mb-1">12</p>
                <p>$25.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class=" w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />

              <div class="text-sm">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1 ">A Trip To Bolgatanga</p>

                <p>$37.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class=" w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />
              <div class="text-sm">
                <h2 class="text-[#ef4136] font-sm">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>

                <p>$37.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class=" w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />

              <div class="text-sm">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>

                <p>$37.00</p>
              </div>
            </div>
          </div>

          <div>
            {/* ----------------------------------- ROWS OF 4 ARTISTS NEW STYLE ------------------------------------ */}
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-2 p-1  border border-solid border-[#dcd3d7]">
              Reviewed In Viva
            </div>
            <div>
              <div class="flex flex-row">
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class="w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />
                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                    <p class="italic mb-1">12</p>
                    <p>$25.00</p>
                  </div>
                </div>
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class=" w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />

                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-medium">
                      African Head Charge
                    </h2>
                    <p class="italic mb-1 ">A Trip To Bolgatanga</p>

                    <p>$37.00</p>
                  </div>
                </div>
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class=" w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />
                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-sm">African Head Charge</h2>
                    <p class="italic mb-1">A Trip To Bolgatanga</p>

                    <p>$37.00</p>
                  </div>
                </div>
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class=" w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />

                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-medium">
                      African Head Charge
                    </h2>
                    <p class="italic mb-1">A Trip To Bolgatanga</p>

                    <p>$37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#e7e1e4] rounded-b-sm text-[#039] hover:text-[#4d1a80] m-1 p-1 border border-solid border-[#dcd3d7]">
              » Find Out More Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-1 p-1 border border-solid border-[#dcd3d7]">
              Upcoming Albums To Pre-order
            </div>
            <div class="bg-[#e7e1e4] rounded-b-sm text-[#039] hover:text-[#4d1a80] m-1 p-1 border border-solid border-[#dcd3d7]">
              » Explore More Albums On The Horizon Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-1 p-1 border border-solid border-[#dcd3d7]">
              New Jazz Arrivals
            </div>
            <div class="bg-[#e7e1e4] rounded-b-sm text-[#039] hover:text-[#4d1a80] m-1 p-1 border border-solid border-[#dcd3d7]">
              » Find more new and reissued Jazz albums here
            </div>
            <div>
              <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-1 p-1 border border-solid border-[#dcd3d7]">
                We Have Over 4000 LPs in Stock
              </div>
              <div class="bg-[#e7e1e4] rounded-b-sm p-1 m-1 text-[#039] hover:text-[#4d1a80] border border-solid border-[#dcd3d7]">
                » Browse All Of Our In Stock Vinyl
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
