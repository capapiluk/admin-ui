<template>
      <div class="d-flex align-items-center">
        <div class="bg-light"></div>
        <div class="container">
            <div class="row justify-content-center my-2">
              <div class="col-md-8 col-lg-6 col-xl-7">
                <div class="card bg-transparent shadow-none border-0">
                  <div class="card-body">
                    <div class="px-3 py-3 text-center">
                      <h1 class="error-title">
                        <span class="blink-infinite">500</span>
                      </h1>
                      <h4 class="text-uppercase">Internal Server Error</h4>
                      <p class="font-size-15 mx-auto text-muted w-75 mt-4">
                        เซิฟเวอร์ทำงานผิดพลาด กรุณากดรีโหลด
                        หรือติดต่อผู้ดูแลระบบ
                      </p>
                      <div class="mt-5 text-center">
                        <button
                          @click="reloadPage()"
                          class="btn btn-primary waves-effect waves-light mx-2"
                        >
                          รีโหลด
                        </button>
                        <button type="button" class="btn btn-outline-primary">
                          <i class="uil uil-user me-2"></i> ติดต่อผูู้ดูแล
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>
const reloadPage = () => {
  window.location.reload(); // Reload the entire page
};
</script>
