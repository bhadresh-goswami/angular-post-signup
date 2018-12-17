using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using apiTesting.Models;
using System.Web.Http.Cors;

namespace apiTesting.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "POST,PUT,DELETE,GET")]
    public class userMastersController : ApiController
    {
        private dbApiTestEntities db = new dbApiTestEntities();

        // GET: api/userMasters
        public IQueryable<userMaster> GetuserMasters()
        {
            return db.userMasters;
        }

        // GET: api/userMasters/5
        [ResponseType(typeof(userMaster))]
        public IHttpActionResult GetuserMaster(int id)
        {
            userMaster userMaster = db.userMasters.Find(id);
            if (userMaster == null)
            {
                return NotFound();
            }

            return Ok(userMaster);
        }

        // PUT: api/userMasters/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutuserMaster(int id, userMaster userMaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userMaster.userId)
            {
                return BadRequest();
            }

            db.Entry(userMaster).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!userMasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/userMasters
        [HttpPost]        
        [ResponseType(typeof(userMaster))]
        public IHttpActionResult PostuserMaster(userMaster userMaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.userMasters.Add(userMaster);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userMaster.userId }, userMaster);
        }

        // DELETE: api/userMasters/5
        [ResponseType(typeof(userMaster))]
        public IHttpActionResult DeleteuserMaster(int id)
        {
            userMaster userMaster = db.userMasters.Find(id);
            if (userMaster == null)
            {
                return NotFound();
            }

            db.userMasters.Remove(userMaster);
            db.SaveChanges();

            return Ok(userMaster);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool userMasterExists(int id)
        {
            return db.userMasters.Count(e => e.userId == id) > 0;
        }
    }
}